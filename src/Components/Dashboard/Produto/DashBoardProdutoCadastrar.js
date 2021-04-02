import React from 'react'
import foto from '../../../Assets/img/fotos/javier-reyes-qi2cD5oR_fE-unsplash.jpg'
import './DashBoardProduto.css'

const DashBoardProdutoCadastrar = () => {
  const [imgState, setImgState] = React.useState([])
  const [form, setForm] = React.useState({
    name: '',
    price: 0,
    descount: 0,
    quantidade: 0,
    category: '',
    type: '',
    color: [''],
    size: [''],
    occasion:[''],
    brand:[''],
    img:['']
  })

  function handleChangeSelect(target,index){
    let selects = []
    const {id, value} = target;
    for(let e=0;e < form[id].length - 1; e++){
      selects.push(target.parentElement.children[e])
    }
    if(form[id].indexOf(value) >= 1){
      let novaArr = form[id].filter((este, i) => form[id].indexOf(este) === i);
      setForm({...form, [id]: [...novaArr]})
      target.value = '...'
    }else{
      if(form[id][index+1] === undefined){
        setForm({...form, [id]: [...form[id], value]})
      }
      if(form[id][index+1] !== '' && form[id][index+1] !== undefined){
        form[id].splice(index+1,1,value)
        setForm({...form, [id]: [...form[id]]}) 
      }
    }
    selects.map((e,index) => {
      if(e.value !== form[id][index+1]){
        form[id].splice(index+1, 1)
        setForm({...form, [id]: [...form[id]]}) 
      }  
    })
  }

  function handleChangeImg(target){
    console.log(target.files[0])
    if(target.files[0] === undefined){
      setImgState('')
    }else{
      setImgState(target.files[0].name)
    }
    setForm({...form, [target.id]: [...form[target.id], target.files[0]]})
  }
  console.log(form)

  return (
    <div className="dashboardProduto">
      <div className="title-produto-dashboard">
        <h1>Cadastrar Produto</h1>
      </div>
      <div className="dashboardProdutoForm">
        <form action="">
          <div>
            <div className="inputsFormProduto">
              <input type="text" placeholder="Nome do Produto" id="name"/>
              <input type="text" placeholder="Preço" id="price"/>
              <input type="text" placeholder="Desconto(Opcional)" id="descount"/>
              <input type="text" placeholder="Quantidade" id="amount"/>
              <select name="category" id="category">
                <option selected disabled>Categoria</option>
                <option value="Masculina">Masculina</option>
              </select>
              <select name="type" id="type">
                <option selected disabled>Tipo</option>
                <option value="Feminina">Feminina</option>
              </select>
              <div className="dashboardProdutoVariasEscolhas">
                <div>
                  <h3>Escolha as Cores</h3>
                  <div>
                    {form.color.map((i,index) => (
                      <select onChange={({target}) => handleChangeSelect(target,index)} name="color" id="color">
                        <option selected disabled>...</option>
                        <option value="Preto">Preto</option>
                        <option value="Branco">Branco</option>
                      </select>
                    ))}
                  </div>
                </div>
                <div>
                  <h3>Escolha as Tamanhos</h3>
                  <div>
                  {form.size.map((i,index) => (
                    <select onChange={({target}) => handleChangeSelect(target,index)} name="size" id="size">
                      <option selected disabled>...</option>
                      <option value="Preto">Preto</option>
                      <option value="Branco">Branco</option>
                    </select>
                  ))}
                  </div>
                </div>
                <div>
                  <h3>Escolha as Ocasiões</h3>
                  <div>
                  {form.occasion.map((i,index) => (
                    <select onChange={({target}) => handleChangeSelect(target,index)} name="occasion" id="occasion">
                      <option selected disabled>...</option>
                      <option value="Preto">Preto</option>
                      <option value="Branco">Branco</option>
                    </select>
                  ))}
                  </div>
                </div>
                <div>
                  <h3>Escolha as Marcas</h3>
                  <div>
                    {form.brand.map((i,index) => (
                    <select onChange={({target}) => handleChangeSelect(target,index)} name="brand" id="brand">
                      <option selected disabled>...</option>
                      <option value="Preto">Preto</option>
                      <option value="Branco">Branco</option>
                    </select>
                    ))}
                  </div>
                </div>
                <div className="dashBoardProdutoImg">
                  <h3>Escolha as Imagens</h3>
                  <ul>
                    {form.img.map((i,index) => (
                      <li>
                        <label htmlFor="img"><img src={foto} alt=""/></label>
                        <input onChange={({target}) => handleChangeImg(target,index)} type="file" name="img" id="img"/>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DashBoardProdutoCadastrar
