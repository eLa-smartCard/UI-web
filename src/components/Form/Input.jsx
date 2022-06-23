import { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';


import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';


const Input = props => {
    const { placeholder, disabled, label, type, value, onChange, title, readOnly, className } = props;
    const classes = useStyles();

    const [typeInput, setTypeInput] = useState(type);
    const [visible, setVisible] = useState(false);

    const handleVisible = () => {
        if (visible == false) {
            setTypeInput('text')
        }
        else {
            setTypeInput('password')
        }
        setVisible(!visible);
    }
    return (
        <div className={className}>
            <p className="text-lg font-semibold my-0 mx-1">{label}</p>
            <div className="focus-within:border-ela border-2 border-slate-300 rounded flex items-center">
                <input
                    type={typeInput}
                    className={clsx("bg-transparent rounded  px-1 py-2  w-full", classes.input)}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    title={title}
                />
                <span onClick={handleVisible} className={clsx({
                    'hidden': type !== 'password',
                    'block': type === 'password',
                })}>
                    {visible ?
                        <VisibilityOffIcon className='text-slate-300 mx-1' />
                        :
                        <VisibilityIcon className='text-slate-300 mx-1' />
                    }
                </span>
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