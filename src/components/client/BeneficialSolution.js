const BeneficialSolution = ({selectedServices}) => {
    console.log(selectedServices)
    return(
        <>
            {
                selectedServices.map((selectedService, index) => (
                    <>
                        <span>{selectedService.benefit}</span>
                    </>
                ))
            }
        </>
    )
}

export default BeneficialSolution