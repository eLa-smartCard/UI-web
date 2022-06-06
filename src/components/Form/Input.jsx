

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const Input = props => {
    const { placeholder, disabled, label, type, value, onChange, title, readOnly } = props;
    const classes = useStyles();

    return (
        <div className='mb-4'>
            <p className="text-lg font-semibold my-0 mx-1">{label}</p>
            <div className="focus-within:border-ela border-2 rounded-xl">
                <input
                    type={type}
                    className={clsx("bg-transparent rounded-xl  px-1 py-2  w-full",classes.input)}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    title={title}
                />
            </div>
        </div>
    )
}

export default Input;


const useStyles = makeStyles((theme) => ({
    input: {
        outline: 'none',
    }
}));