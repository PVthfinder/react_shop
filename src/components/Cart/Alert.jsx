import {useEffect, useContext} from 'react';

import {ShopContext} from '../../context.js';

function Alert() {
    //const {name, closeAlert=Function.prototype} = props;

    const {alert: name='', closeAlert=Function.prototype} = useContext(ShopContext);

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
