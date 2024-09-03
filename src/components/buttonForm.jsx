// eslint-disable-next-line react/prop-types
const ButtonForm = ({ named }) => {
    return (
        <button className="hover:bg-amber-400 transition hover:ease-in ease-out active:bg-amber-400 active:ease-in bg-amber-300 text-port-gore-950 font-semibold text-xl rounded-md h-[3.5rem]"  type="submit">{named}</button>
    );
}

export default ButtonForm;
