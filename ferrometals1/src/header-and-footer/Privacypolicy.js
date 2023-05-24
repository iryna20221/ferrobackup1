import "../../src/app.css"

const PrivacyPolicy = ({data}) => {
    return (
        <section className="Standart-Section">
            <div className="Privacy-policy-container">{data.privacyPolicy}</div>
        </section>
    )
}

export default PrivacyPolicy;