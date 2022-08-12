import React from 'react'
import '../assets/css/Footer.css';
import Badge from 'react-bootstrap/Badge';

const Footer = () => {
  return (
    <footer>
      <hr />
      <h5 class="parr_edit">Para conocer modelos de autos antiguos en Chile, visite el sitio web </h5>
      <h5 class="parr_edit"><a href='http://www.museoautosantiguoschile.cl/' target="about_blank">Museo de Autos Antiguos de Chile</a> <Badge pill bg="info">Novedades</Badge></h5>
      <hr />
    </footer>
  )
}
export default Footer;