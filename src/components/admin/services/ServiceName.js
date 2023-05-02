const ServiceName = ({service, setService}) => {
    return (

        <div className="form-floating mb-2">
            <input type="text" className="form-control" id="service" value={service}
                   onChange={(e) => setService(e.target.value)}
                   placeholder="Service name"/>
            <label htmlFor="service">Service name</label>
        </div>

    )
}
export default ServiceName