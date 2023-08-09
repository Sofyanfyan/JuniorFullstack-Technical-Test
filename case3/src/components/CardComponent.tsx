import Card from 'react-bootstrap/Card';

type ICard = {
      id: number;
      name: string;
      description: string;
      image: string;
      stock: number;
      price: number;
      createdAt: string;
      updatedAt: string;
}

function CardComponent(props: ICard)
{

   const {name, description, image, stock, price} = props

   return (

   <div className="col-lg-3 col-md-4 my-3 d-flex align-items-stretch">
      <Card className="card">
         <Card.Img variant="top" src="https://www.marystestkitchen.com/wp-content/uploads/2022/06/recipe-img-koreancorndogs.jpg" />
            <Card.Body>
               <Card.Title>
                  {name}
               
               </Card.Title>
               <Card.Text>
               <h6 className="ms-1 my-3">
                  IDR {
                     price
                  }
               </h6>
               </Card.Text>
               <Card.Text>
                  {
                     description
                  }
               </Card.Text>
            </Card.Body>
            <Card.Header>
            <Card.Text>
                  {
                     stock
                  } days Pre order
               </Card.Text>
            </Card.Header>
      </Card>
   </div>
 )
}


export default CardComponent;