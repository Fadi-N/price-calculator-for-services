const ServiceBeneficialSolution = ({beneficialSolution, setBeneficialSolution}) => {
    return (
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="beneficialSolution" value={beneficialSolution}
                   onChange={(e) => setBeneficialSolution(e.target.value)}
                   placeholder="Beneficial solution"/>
            <label htmlFor="beneficialSolution">Beneficial solution</label>
        </div>
    )
}

export default ServiceBeneficialSolution