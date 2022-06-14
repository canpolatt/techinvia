interface ServiceProps{
  id:number;
  title:string;
  header:string;
  description:string;
  image:string;
}

const ServiceItem = ({id,title,header,description,image}:ServiceProps) => {
  return (
    <div className="service--container">service</div>
  )
}

export default ServiceItem;