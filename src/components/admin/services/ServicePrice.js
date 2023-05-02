const ServicePrice = ({price, setPrice}) =>{
    return(
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="price" value={price}
                   onChange={(e) => setPrice(e.target.value)}
                   placeholder="Price"/>
            <label htmlFor="price">Price</label>
        </div>
    )
}

export default ServicePrice