import axios from "axios";

const uploadImage = async (image) => {
	const data = new FormData();
	data.append("file", image);
	data.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
	data.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);
	data.append("folder", "Elviro");

	try {
		const response = await axios.post(
			`https://api.cloudinary.com/v1_1/${
				import.meta.env.VITE_CLOUD_NAME
			}/image/upload`,
			data
		);
		const res = await response.data;
		return res.secure_url;
	} catch (error) {
		console.log("Error :", error);
	}
};

export default uploadImage;
