const Button = ({children, ...props}) => {
    return (
        <button
            className={'border rounded-md px-4 h-8 cursor-pointer'}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button
