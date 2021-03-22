import React from 'react'
import moletomcinza from '../../Assets/img/fotos/pexels-cottonbro-6626903.jpg'
import blusavinho from '../../Assets/img/fotos/pexels-luan-queiros-3260957.jpg'
import tenisnike from '../../Assets/img/fotos/pexels-keanen-geego-kilian-2975405.jpg'
import oculoscinza from '../../Assets/img/fotos/vonecia-carswell-D3HSYAUjVrM-unsplash.jpg'
import calcajeans from '../../Assets/img/fotos/ian-dooley-8HqPXTToMn0-unsplash.jpg'
import blusapreta from '../../Assets/img/fotos/ian-dooley-wzRKn-AjKf4-unsplash.jpg'
import SlideList from './Slide/SlideList'
import SlidePromo from './Slide/SlidePromo'

const BodyHome = () => {
  let bodyList = [
    {
      type: 'list',
      title: 'Produtos Populares',
      products: [
        {
          nome: 'Moletom Cinza',
          price: 49.99,
          desconto: 0,
          imgProd: moletomcinza
        },
        {
          nome: 'Blusa vinho',
          price: 69.99,
          desconto: 20,
          imgProd: blusavinho
        },
        {
          nome: 'Tênis Nike',
          price: 99.99,
          desconto: 0,
          imgProd: tenisnike
        },
        {
          nome: 'Óculos cinza',
          price: 29.99,
          desconto: 0,
          imgProd: oculoscinza
        },
        {
          nome: 'Calça Jeans - Feminina',
          price: 59.99,
          desconto: 0,
          imgProd: calcajeans
        },
        {
          nome: 'Blusa Preta',
          price: 49.99,
          desconto: 10,
          imgProd: blusapreta
        },
      ]
    },
    {
      type: 'list',
      title: 'Camisetas Masculinas',
      products: [
        {
          nome: 'Moletom Cinza',
          price: 49.99,
          desconto: 0,
          imgProd: moletomcinza
        },
        {
          nome: 'Blusa vinho',
          price: 69.99,
          desconto: 20,
          imgProd: blusavinho
        },
        {
          nome: 'Tênis Nike',
          price: 99.99,
          desconto: 0,
          imgProd: tenisnike
        },
        {
          nome: 'Óculos cinza',
          price: 29.99,
          desconto: 0,
          imgProd: oculoscinza
        },
        {
          nome: 'Calça Jeans - Feminina',
          price: 59.99,
          desconto: 0,
          imgProd: calcajeans
        },
        {
          nome: 'Blusa Preta',
          price: 49.99,
          desconto: 10,
          imgProd: blusapreta
        },
      ]
    },
    {
      type: 'promolist',
      title: 'Promoção do Dia',
      backgroundColor: "rgb(40,48,57)",
      lettersColor: "#fff",
      buttonColor: "#fff",
      products: [
        {
          nome: 'Moletom Cinza',
          price: 49.99,
          desconto: 0,
          imgProd: moletomcinza
        },
        {
          nome: 'Blusa vinho',
          price: 69.99,
          desconto: 20,
          imgProd: blusavinho
        },
        {
          nome: 'Tênis Nike',
          price: 99.99,
          desconto: 0,
          imgProd: tenisnike
        },
        {
          nome: 'Óculos cinza',
          price: 29.99,
          desconto: 0,
          imgProd: oculoscinza
        },
        {
          nome: 'Calça Jeans - Feminina',
          price: 59.99,
          desconto: 0,
          imgProd: calcajeans
        },
        {
          nome: 'Blusa Preta',
          price: 49.99,
          desconto: 10,
          imgProd: blusapreta
        },
      ]
    },
    {
      type: 'list',
      title: 'Camisetas Femininas',
      products: [
        {
          nome: 'Moletom Cinza',
          price: 49.99,
          desconto: 0,
          imgProd: moletomcinza
        },
        {
          nome: 'Blusa vinho',
          price: 69.99,
          desconto: 20,
          imgProd: blusavinho
        },
        {
          nome: 'Tênis Nike',
          price: 99.99,
          desconto: 0,
          imgProd: tenisnike
        },
        {
          nome: 'Óculos cinza',
          price: 29.99,
          desconto: 0,
          imgProd: oculoscinza
        },
        {
          nome: 'Calça Jeans - Feminina',
          price: 59.99,
          desconto: 0,
          imgProd: calcajeans
        },
        {
          nome: 'Blusa Preta',
          price: 49.99,
          desconto: 10,
          imgProd: blusapreta
        },
      ]
    },
    {
      type: 'list',
      title: 'Calças',
      products: [
        {
          nome: 'Moletom Cinza',
          price: 49.99,
          desconto: 0,
          imgProd: moletomcinza
        },
        {
          nome: 'Blusa vinho',
          price: 69.99,
          desconto: 20,
          imgProd: blusavinho
        },
        {
          nome: 'Tênis Nike',
          price: 99.99,
          desconto: 0,
          imgProd: tenisnike
        },
        {
          nome: 'Óculos cinza',
          price: 29.99,
          desconto: 0,
          imgProd: oculoscinza
        },
        {
          nome: 'Calça Jeans - Feminina',
          price: 59.99,
          desconto: 0,
          imgProd: calcajeans
        },
        {
          nome: 'Blusa Preta',
          price: 49.99,
          desconto: 10,
          imgProd: blusapreta
        },
      ]
    },
  ]
  return (
    <>
      {bodyList.map(i => (
        i.type === "list" ? <SlideList title={i.title} dataList={i.products}/>
        : <SlidePromo title={i.title} dataList={i.products} backgroundColor={i.backgroundColor} lettersColor={i.lettersColor} buttonColor={i.buttonColor}/>
      ))}
      
    </>
  )
}

export default BodyHome
