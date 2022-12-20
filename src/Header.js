import 'bootstrap/dist/css/bootstrap.css';
import headImg from './images/headImg.jpeg';

export default function App() {
    return (
        <div>
            <div className="header" style={{
                backgroundImage: `url(${headImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <div>Onboarding</div>
            </div>
        </div>

    );
}