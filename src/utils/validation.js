//ไว้ validate email ว่ามี character ก่อนและหลัง @ กับ .
export const validateEmail = (email) => {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
};

//ให้ password มีอย่างน้อย 5 ตัว
export const validatePassword = (password) => {
	const regex = /^.{5,}$/;
	return regex.test(password);
};

export const validateUrl = (url) => {
	const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
	return regex.test(url);
};
