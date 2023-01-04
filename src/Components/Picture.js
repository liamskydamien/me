import Card from "../UI/Card/Card";

const Picture = (props) => {
    return  <Card className={props.className}>
                <img src={props.src} alt={props.alt} />
            </Card>
}
export default Picture;