import { jwtDecode } from "jwt-decode";

//ได้ userId จาก token
export default function decodeToken(token) {
	const decodedToken = jwtDecode(token);
	const userId = decodedToken.id;

	return userId;
}
