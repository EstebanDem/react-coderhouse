import React, { useState } from "react";
import { getFirestore } from "../../firebase";
import Form  from 'react-bootstrap/esm/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/esm/Button';


const initialState = {
    name: "",
    phone: "",
    email1: "",
    email2: "",
  };

const PaymentForm = ({ clearCart, total, cart }) => {

    const [formData, setFormData] = useState(initialState);

    const db = getFirestore();
    const orders = db.collection("orders");

    function handleSubmit(e) {
        e.preventDefault();
    
        const orderDetail = cart.map((i) => `${i.item.title}: ${i.quantity}`);
        const date = new Date();
    
        const newOrder = {
          date: date,
          buyer: formData,
          item: orderDetail,
          total: total,
        };
    
        orders
          .add(newOrder)
          .then((response) => alert(`Su ID de compra es: ${response.id} `))
          .then(setFormData(initialState))
          .catch((error) => console.log(error))
          .finally(() => {
            clearCart();
            console.log(newOrder);
          });
    }

    function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      }

      
      return (
        
        <Form onChange={handleChange} onSubmit={handleSubmit}>
           
          <FloatingLabel 
            controlId="floatingInput"
            label="Nombre completo"
            className='mb-3'
          >
            <Form.Control  required name='name' id='name' type="text" placeholder="First Last" />
          </FloatingLabel>

          <FloatingLabel 
            controlId="formBasicEmail"
            label="Correo electrónico"
            className='mb-3'
          >
            <Form.Control required onChange={handleChange} name='email1' id='email1' type="email" placeholder="hi@gmail.com" />
          </FloatingLabel>

          <FloatingLabel 
            controlId="formBasicEmail"
            label="Repita su correo electrónico"
            className='mb-3'
          >
            <Form.Control required onChange={handleChange} name='email2' id='email2' type="email" placeholder="hi@gmail.com" />
          </FloatingLabel>

          <FloatingLabel 
            controlId="floatingInput"
            label="Ingrese su celular"
            className='mb-3'
          >
            <Form.Control required name='phone' id='phone' type="text" placeholder="0123456" />
          </FloatingLabel>
          <div className="d-grid gap-2">
          {formData.email1 === formData.email2 ? (
            <Button variant="warning" type="submit"size="lg">
              Enviar
            </Button>
          ): (
            <Button variant="warning" type="submit"size="lg">
              Datos incorrectos
            </Button>
          )}
          </div>
        </Form>
      );
}

export default PaymentForm;
