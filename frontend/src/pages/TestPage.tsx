import NavbarT from "@components/navbar"
import RandomNumberService from "@/services/testService"

const TestPage = () => {
    return (
        <div>
            <NavbarT />
            <h1>TestPage</h1>
            <p>Random number is: {RandomNumberService.getRandomNumber()} </p>
        </div>
       
        
    )
}

export default TestPage