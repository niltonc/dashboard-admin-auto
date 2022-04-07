import React from 'react'
import {Row,Col,Image,Form,Button,ListGroup,} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import Card from '../../../components/Card'
// img
// import facebook    from     '../../../assets/images/brands/fb.svg'
// import google    from     '../../../assets/images/brands/gm.svg'
// import instagram    from     '../../../assets/images/brands/im.svg'
// import linkedin  from     '../../../assets/images/brands/li.svg'
import auth1 from     '../../../assets/images/auth/01.png'
import Logo from '../../../assets/images/logo'

const SignIn = () => {

   let history = useHistory()

   return (
      <>
         <section className="login-content">
            <Row className="m-0 align-items-center bg-white vh-100">            
               <Col md="6">
                  <Row className="justify-content-center">
                     <Col md="10">
                        <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                           <Card.Body>
                              <Link to="/dashboard" className="navbar-brand d-flex align-items-center mb-3">
                                                     
                                 <Logo/>
                     
                                 {/* <h4 className="logo-title ms-3">AUTODOMO</h4> */}

                              </Link>
                              <h2 className="mb-2 text-center">AUTODOMO</h2>
                              <p className="text-center">Sua Casa na palma de sua mão</p>
                              <Form>
                                 <Row>
                                    <Col lg="12">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="email" className="">Email</Form.Label>
                                          <Form.Control type="email" className="" id="email" aria-describedby="email" placeholder=" "/>
                                       </Form.Group >
                                    </Col>
                                    <Col lg="12" className="">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="password" className="">Senha</Form.Label>
                                          <Form.Control type="password" className="" id="password" aria-describedby="password" placeholder=" "/>
                                       </Form.Group>
                                    </Col>

                                    <Col lg="12" className="d-flex justify-content-between">
                                       <Form.Check className="form-check mb-3">
                                          <Form.Check.Input type="checkbox"  id="customCheck1"/>
                                          <Form.Check.Label htmlFor="customCheck1">Lembrar-me</Form.Check.Label>
                                       </Form.Check>
                                       {/* <Link to="/auth/recoverpw">Esqueceu a senha?</Link> */}
                                    </Col>
                                    
                                 </Row>
                                 
                                 <div className="d-flex justify-content-center">
                                    <Button  onClick={() => history.push('/dashboard')} type="button" variant="btn btn-primary">Entrar</Button>
                                 </div>
                                  
                              {/*   <p className="text-center my-3">Não conseguiu ou entrar com outras contas?</p>

                                 <div className="d-flex justify-content-center">
                                    <ListGroup as="ul" className="list-group-horizontal list-group-flush">
                                       <ListGroup.Item as="li"  className="border-0 pb-0">
                                          <Link to="#"><Image src={facebook} alt="fb"/></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li"  className="border-0 pb-0">
                                          <Link to="#"><Image src={google} alt="gm"/></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li"  className="border-0 pb-0">
                                          <Link to="#"><Image src={instagram} alt="im"/></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li"  className="border-0 pb-0">
                                          <Link to="#"><Image src={linkedin} alt="li"/></Link>
                                       </ListGroup.Item>
                                    </ListGroup>
                                 </div> */}

                                 {/* <p className="mt-3 text-center">
                                 Não tem uma conta? <Link to="/auth/sign-up" className="text-underline">Clique aqui para se inscrever.</Link>
                                 </p> */}

                              </Form>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
                  
                  <div className="sign-bg">
                  <svg width="236" height="240" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g opacity="0.05">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34.7405 19.0429C34.7389 19.0429 34.7375 19.0429 34.7361 19.0429C34.0817 19.0411 33.5293 18.572 33.506 17.9634C33.491 17.5729 33.5307 17.1799 33.536 16.788C33.5781 13.8817 32.8325 11.1908 31.2238 8.7708C28.8967 5.2705 25.6281 3.1965 21.4873 2.4835C21.1318 2.4225 20.7528 2.3371 20.4515 2.1533C20.0156 1.887 19.8941 1.3247 20.061 0.8255C20.2323 0.3143 20.5694 0 21.0777 0C21.1072 0 21.137 0.00110068 21.1673 0.00320068C21.7985 0.0469007 22.4323 0.145701 23.0493 0.288601C25.8473 0.935201 28.3198 2.2281 30.4576 4.1409C31.1034 4.718 31.6839 5.3682 32.1047 5.794C34.9993 9.5168 36.2813 13.4655 35.9419 17.9151C35.8883 18.6227 35.4314 19.0429 34.7405 19.0429Z" fill="#196FA9"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3069 19.0574C30.2774 19.0574 30.2473 19.0567 30.2166 19.0549C29.5231 19.0178 29.0605 18.5268 29.094 17.8184C29.1584 16.4373 29.0224 15.0788 28.5176 13.7901C27.102 10.1723 24.436 8.09689 20.6105 7.50179C20.0899 7.42059 19.6051 7.33489 19.3645 6.78319C18.9836 5.91039 19.554 5.02429 20.4645 5.02429C20.513 5.02419 20.5622 5.02709 20.6123 5.03199C23.1509 5.29089 25.3934 6.25469 27.3294 7.91629C27.8104 8.32909 28.253 8.78659 28.5433 9.06209C30.7477 11.7944 31.7254 14.6921 31.5236 17.9712C31.4831 18.6319 30.9909 19.0574 30.3069 19.0574V19.0574Z" fill="#196FA9"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1884 19.1685C26.1477 19.1685 26.106 19.1668 26.0637 19.1636C25.3426 19.1067 24.8963 18.5829 24.9563 17.8149C25.0805 16.226 24.6204 14.8477 23.5088 13.7008C22.6923 12.8587 21.6879 12.3881 20.5329 12.198C20.2228 12.1471 19.8827 12.0403 19.6436 11.8498C19.2086 11.5037 19.1483 10.9446 19.3945 10.4334C19.6178 9.96879 19.9604 9.73459 20.4437 9.73459C20.5022 9.73449 20.5629 9.73809 20.626 9.74509C22.7042 9.97329 24.3919 10.9276 25.7356 12.4926C27.0014 14.1351 27.5856 15.9628 27.3901 18.0213C27.322 18.7356 26.8514 19.1685 26.1884 19.1685V19.1685Z" fill="#196FA9"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5691 14.5626C7.621 14.5626 3.6269 15.6186 0.918301 17.5466L3.4892 22.5507C5.2797 21.1277 7.9883 20.2554 10.605 20.2554C14.4615 20.2552 16.2978 22.0457 16.2978 25.1218H10.6052C3.0758 25.1218 0 28.1517 0 32.5131C0.0002 36.7826 3.4431 39.9964 9.2278 39.9964C12.8544 39.9962 15.4256 38.8027 16.7567 36.5531L16.757 39.6292H23.4595V25.5349C23.4595 18.0516 19.0983 14.5626 11.5691 14.5626V14.5626ZM11.0183 35.1756C8.4932 35.1756 6.9781 33.9822 6.9781 32.1919C6.9781 30.5388 8.0341 29.2995 11.3854 29.2995L16.2978 29.2993V31.8244C15.4714 34.074 13.4055 35.1759 11.0181 35.1759L11.0183 35.1756V35.1756Z" fill="#196FA9"/>
                     </g>
                  </svg>
                  </div>

               </Col>
               <Col md="6" className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                  <Image src={auth1} className="Image-fluid gradient-main animated-scaleX" alt="images"/>
               </Col>
            </Row>
         </section>
        </>
    )
}

export default SignIn
