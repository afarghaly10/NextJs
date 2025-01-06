'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';

const ImagePicker = ({ label, name }: { label: string; name: string }) => {
	const [pickedImage, setPickedImage] = useState<string | null>();
	const imageUploadRef = useRef<HTMLInputElement>(null);

	const handleUploadImage = () => {
		imageUploadRef?.current?.click();
	};

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (!files || files.length === 0) {
			setPickedImage(null);
			return;
		}

		const file = files[0];
		const fileReader = new FileReader();

		fileReader.onload = () => {
			const result = fileReader.result;
			if (typeof result === 'string') {
				setPickedImage(result);
			} else {
				console.error('FileReader result is not a string');
			}
		};
		fileReader.readAsDataURL(file);
	};

	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{!pickedImage && <p>No image picked yet.</p>}
					{pickedImage && <Image src={pickedImage} alt="selected Image" fill />}
				</div>
				<input
					className={classes.input}
					type="file"
					id={name}
					accept="image/png, image/jpeg"
					name={name}
					ref={imageUploadRef}
					onChange={handleImageChange}
					required
				/>
				<button
					className={classes.button}
					type="button"
					onClick={handleUploadImage}
				>
					Upload Image
				</button>
			</div>
		</div>
	);
};

export default ImagePicker;
