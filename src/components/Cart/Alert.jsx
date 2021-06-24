import {useEffect} from 'react';

function Alert(props) {
    const {name, closeAlert=Function.prototype} = props;

    useEffect(() => {
        const timeoutId = setTimeout(closeAlert, 3000);

        return () => clearTimeout(timeoutId);
    }, [name]);

    return (
        <div id="toast-container">
            <div className="toast">{name} added to Cart</div>
        </div>
    )
}

export default Alert;
