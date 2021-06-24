import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'
import "./gallery.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import '../components/header.css'
// import gifExample from '../images/profile-photos/testgif1.gif'
import { FaInstagram } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { node } from 'prop-types'
import { faBimobject } from '@fortawesome/free-brands-svg-icons'



class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: "all",
            showEmailCopy: false,
            products: get(this, 'props.data.allDataJson.edges')
        }
        this.handleClick = this.filter.bind(this);
        this.handleClick = this.showEmailCopy.bind(this);
    }

    filter(tag) {
        if (tag === "all") {
            this.setState({products: get(this, 'props.data.allDataJson.edges')})
        }
        else if (tag === "MovingImage") {
            let taggedArray = get(this, 'props.data.allDataJson.edges').filter(obj => {
                let results = obj.node.tag.includes("stopMotion") || obj.node.tag.includes("2D") || obj.node.tag.includes("3D") || obj.node.tag.includes("MovingImage");
                if (results) {
                    console.log('RESULT', obj.node)
                    return obj.node  
                }
            })
            this.setState({products: taggedArray})
        } 
        else {
            let taggedArray = get(this, 'props.data.allDataJson.edges').filter(obj => {
                return obj.node.tag.includes(tag)
            })
            this.setState({products: taggedArray})
        };
        this.setState({ tag: tag });
    }      

    showEmailCopy(email) {
        this.setState({ showEmailCopy: true });
        setTimeout(() => {
            this.setState({ showEmailCopy: false });
        }, 1000);
        navigator.clipboard.writeText(email);
    }

    componentDidMount = () => {
        window.addEventListener("load", this.refresh());
    }

    refresh() {
        console.log('refresh', this.state.tag)
        this.setState({products: get(this, 'props.data.allDataJson.edges')})
    }

    render() {
        const products = this.state.products
        return (
        <Layout>
            <div className="flex">
            {/* DESKTOP HEADER */}
            <header className="header headerDesktop">
                <div className="flexCenter">
                    <Link to="/" className="logoImage">
                        <StaticImage src="../images/logoTwo.png"
                        alt="Logo"
                        placeholder="blurred"
                        layout="fixed"
                        width={200}
                        height={200}
                        className="logoImage"
                        />
                    </Link>
                </div>
                <div className="navLinkSection">
                    <ul className="scrollableList">
                        <li><Link to="/about" className="menuLink">about</Link></li>
                        <li><Link to="/graduates" className="menuLink">graduates</Link></li>
                        <li className="TopNav catalogue"><button onClick={() => this.filter("all")}><Link to="/gallery" className="menuLink active">catalogue</Link></button></li>
                        <li className={this.state.tag === "all" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("all")}><StaticImage className="icon noTwist" src="../images/shapes/grain-3.png" width={30} alt="Logo" placeholder="tracedSVG"/>all</button></li>
                        <li className={this.state.tag === "GamesDesign" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("GamesDesign")}><StaticImage className="icon noTwist" src="../images/shapes/moving-image.png" width={30} alt="Logo" placeholder="tracedSVG"/>Games Design</button></li>
                        <li className={this.state.tag === "DigitalArt" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("DigitalArt")}><StaticImage className="icon noTwist" src="../images/shapes/illustration.png" width={30} alt="Logo" placeholder="tracedSVG"/>Digital Art</button></li>
                        <li className={this.state.tag === "Printmaking" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("Printmaking")}><StaticImage className="icon noTwist" src="../images/shapes/animation.png" width={30} alt="Logo" placeholder="tracedSVG"/>Printmaking</button></li>
                        <li className={this.state.tag === "MovingImage" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("MovingImage")}><StaticImage className="icon noTwist" src="../images/shapes/documentary.png" width={30} alt="Logo" placeholder="tracedSVG"/>Moving Image</button></li>
                        <li className={this.state.tag === "ChildrenBooks" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("ChildrenBooks")}><StaticImage className="icon noTwist" src="../images/shapes/grain-2.png" width={30} alt="Logo" placeholder="tracedSVG"/>Children's Books</button></li>
                        <li className={this.state.tag === "ComicsGN" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("ComicsGN")}><StaticImage className="icon" src="../images/shapes/etc.png" width={30} alt="Logo" placeholder="tracedSVG"/>Graphic novels</button></li>
                        <li className={this.state.tag === "Publication" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("Publication")}><StaticImage className="icon twist" src="../images/shapes/illustration.png" width={30} alt="Logo" placeholder="tracedSVG"/>Publication</button></li>
                        <li className={this.state.tag === "Installation" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("Installation")}><StaticImage className="icon twist" src="../images/shapes/animation.png" width={30} alt="Logo" placeholder="tracedSVG"/>Installation</button></li>
                        <li className={this.state.tag === "Objects" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("Objects")}><StaticImage className="icon twist" src="../images/shapes/documentary.png" width={30} alt="Logo" placeholder="tracedSVG"/>Objects</button></li>
                        <li className={this.state.tag === "Drawings" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("Drawings")}><StaticImage className="icon twist" src="../images/shapes/grain-3.png" width={30} alt="Logo" placeholder="tracedSVG"/>Drawings</button></li>
                        <li className={this.state.tag === "Textiles" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("Textiles")}><StaticImage className="icon twist" src="../images/shapes/moving-image.png" width={30} alt="Logo" placeholder="tracedSVG"/>Textiles</button></li>
                        <li className={this.state.tag === "Workshops" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("Workshops")}><StaticImage className="icon twist" src="../images/shapes/grain-2.png" width={30} alt="Logo" placeholder="tracedSVG"/>Educational</button></li>
                    </ul>
                </div>
            </header>
            {/* MOBILE HEADER */}
            <header className="headerMobile">
                <Link to="/" className="logoImageMobile flexCenter">
                        <StaticImage src="../images/logoTwo.png"
                        alt="Logo"
                        placeholder="tracedSVG"
                        layout="fixed"
                        width={120}
                        height={120}
                        />
                </Link>
                <div className="flexCenter paddingTop">
                    <button onClick={() => this.filter("all")}><Link to="/gallery" className="menuLink active">catalogue</Link></button>
                    <Link to="/about" className="menuLink">about</Link>
                </div>
                <div className="mobileFilterContainer">
                    <p className="filterBy">Filter by:</p>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "all" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("all")}>all</button>
                        <StaticImage className="icon" src="../images/shapes/grain-3.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "moving image" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("moving image")}>moving image</button>
                        <StaticImage className="icon" src="../images/shapes/moving-image.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "illustration" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("illustration")}>illustration</button>
                        <StaticImage className="icon" src="../images/shapes/illustration.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "animation" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("animation")}>animation</button>
                        <StaticImage className="icon" src="../images/shapes/animation.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "children's books" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("children's books")}>children's books</button>
                        <StaticImage className="icon" src="../images/shapes/childrens-book.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "documentary" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("documentary")}>documentary</button>
                        <StaticImage className="icon" src="../images/shapes/documentary.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "etc" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("etc")}>etc</button>
                        <StaticImage className="icon" src="../images/shapes/etc.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                </div>
            </header>
            {/* GALLERY OF IMAGES */}
            <div className="outerDiv">
                {products.sort(() => Math.random() - 0.5).map(({ node }, index) => {
                    return (
                        <div key={index} id={node.artist} className={`image${index} flex-container ${node.tag}`}>
                            {console.log('name in json', node.artist)}
                            {node.profileImage !== null &&
                                <div className="img1-wrap">
                                    <img src={node.profileImage.childImageSharp.fluid.src} alt="profile of artist" className="image"/>
                                    <div className="overlay">
                                        <div className="text">
                                            <p className="artistName">{node.artist}</p>
                                            <div className="flexAround">
                                                {node.instagram && <p className="iconP"><a href={node.instagram} target="_blank" rel="noopener noreferrer" width="5px"><FaInstagram /></a></p>}
                                                {node.website && <p className="iconP"><a href={node.website} target="_blank" rel="noopener noreferrer"><CgProfile /></a></p>}
                                                {node.email && <p className="iconP">
                                                    <a onClick={() => this.showEmailCopy(node.email)}><HiOutlineMailOpen /></a></p>}
                                            </div>
                                            <p className={this.state.showEmailCopy ? "display emailCopy" : "emailCopy"}>email copied!</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>       
                    )
                })}
            </div>
            </div>
        </Layout>
        )
    }
}

export default ProductPage


export const productsQuery = graphql`
  query {
    allDataJson {
      edges {
        node {
          artist
          email
          website
          instagram
          profileImage {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tag
          extension
        }
      }
    }
  }
`