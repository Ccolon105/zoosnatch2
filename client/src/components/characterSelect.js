import React from "react";
import characters from "../characters.json";
import { HeaderH2, CharImageContainer, CharImageSquare, ImageSquare, ImageText } from "./NewComponents/AllComponents";


var char = this.state.unlockedCharacters;

const SelectCharacter = (props) => {

  determineCharImage = (props) => {
    switch (char) {
      case 0:
        this.state.giraffeImage.setState = characters[0].staticImg;
        this.state.bearImage.setState = characters[1].cagedImg;
        this.state.monkeyImage.setState = characters[0].cagedImg
        break;
      case 1:
        giraffeImage = giraffe.staticImg;
        bearImage = bear.staticImg;
        monkeyImage = monkey.cagedImg;
        break;
      case 2:
        giraffeImage = giraffe.staticImg;
        bearImage = bear.staticImg;
        monkeyImage = monkey.staticImg;
        break;
      default:
        return 0;
    }
  };

  ///////we will need to put a function for an onClick


  render() {
    return (
      <>
        <title>Choose a Character</title>
        <div className="w3-container">
          <div className="container">
            <HeaderH2 text="Choose a Character" />

            <div className="row">
              <CharImageContainer
                giraffeImage={this.state.giraffeImage}
                bearImage={this.state.bearImage}
                monkeyImage={this.state.monkeyImage}
              />
            </div>

          </div>
        </div>
      </>
    );
  }
};

export default SelectCharacter;