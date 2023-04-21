import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

function SignIn() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();
	const replyToken = "token";

	const setTargetValue = (cb) => {
		return (event) => {
			cb(event.target.value);
		};
	};

	async function login() {
		try {
			const response = await fetch("https://fakestoreapi.com/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: username,
					password: password,
				}),
			});
			const data = await response.json();
			console.log(data);
			localStorage.setItem(replyToken, data.token);
			setIsLoggedIn(true);
			setTimeout(() => {
				navigate("/");
			}, 2000);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					onSubmit={(e) => {
						e.preventDefault();
						login();
					}}
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					{isLoggedIn && (
						<Typography sx={{ mb: 3 }} color="primary">
							Logged in successfully!
						</Typography>
					)}
					<Box component="form" noValidate sx={{ mt: 1 }}>
						<TextField
							onChange={setTargetValue(setUsername)}
							margin="normal"
							value={username}
							required
							fullWidth
							label="Username"
						/>
						<TextField
							onChange={setTargetValue(setPassword)}
							margin="normal"
							required
							fullWidth
							value={password}
							name="password"
							label="Password"
							autoComplete="current-password"
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
						<p>Login Info: username: "mor_2314", password: "83r5^_" </p>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default SignIn;
