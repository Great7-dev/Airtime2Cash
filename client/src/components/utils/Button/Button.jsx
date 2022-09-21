/* Code generated with AutoHTML for Figma */
import './Button.css';
import { Link } from 'react-router-dom';
export const Button = ({
    ...props
}) => {

    return (
        <Link to='/#' className="button">
            <div className="button-text">
                {props.text}
            </div>
        </Link>
    )
}