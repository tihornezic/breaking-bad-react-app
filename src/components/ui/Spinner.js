import spinner from '../../img/spinner.gif'

const Spinner = () => {
    return (
        <img src={spinner} style={{width: '100px', margin:'auto', display: 'block',
        marginTop:'150px' }} alt='loading' />
    )
}

export default Spinner
