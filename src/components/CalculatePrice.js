import {useSelector} from "react-redux";

function CalculatePrice() {
    const data = useSelector((state) => state.services.data)
    const selectedYear = useSelector((state) => state.services.selectedYear)
    const selectedServices = useSelector((state) => state.selectedServices.selectedServices)

    let totalPrice = 0;

    return (
        <>
            {
                data[`year-${selectedYear}`].map((service, index) => {
                    selectedServices.forEach(selectedService => {
                        if (selectedService.toLowerCase() === 'internet'){
                            totalPrice += service.internet
                        }else if (selectedService.toLowerCase() === 'tv'){
                            totalPrice += service.tv
                        }else if (selectedService.toLowerCase().includes('phone')){
                            totalPrice += service.phoneSubscription
                        }else if (selectedService.toLowerCase().includes('decoder')){
                            totalPrice += service.decoder
                        }else if (selectedService.toLowerCase().includes('+ tv')){
                            totalPrice += service.internetAndTv
                        }else if (selectedService.toLowerCase().includes('+ phone')){
                            totalPrice += service.internetAndPhoneSubscription
                        }
                    })
                })
            }
            {totalPrice}
        </>
    )
}

export default CalculatePrice