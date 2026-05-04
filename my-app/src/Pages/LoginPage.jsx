
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import loginhouseImg from '../Assets/login-houseImg.jpg';
import googleIcon from '../Assets/googleIcon.png';
export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            // Fetch user profile with the access token
            fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
            })
                .then((res) => res.json())
                .then((profile) => {
                    login(profile);           
                    navigate('/home');            
                });
        },
        onError: () => console.error('Login failed'),
    });

    return (
        <div className="login_content">
            <div className="image_container">
                <img src={loginhouseImg} alt="House" className="login_image" />

                <div className="overlay_content">
                    <h1>Welcome 👋</h1>
                    <p>From budget stays to premium apartments — explore the best rentals near you.</p>

                    <button onClick={() => handleGoogleLogin()} className="google_login_btn">
                        <div className='btn_content'>
                            <div>
                                <img src={googleIcon} alt="Google Icon" className="google_icon" />
                            </div>
                            <div>
                                Sign in with Google
                            </div>
                        </div>

                    </button>
                </div>
            </div>
        </div>
    );
}