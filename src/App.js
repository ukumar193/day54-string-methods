import './App.css';

function App() {
  let Alphabets= "abcdefghijklmnopqrstuvwxyz";
  return (
    <div className="App">
      <div>
    <button type='button' onClick={()=>{
      console.log(Alphabets.toUpperCase());
      console.log(Alphabets.toLowerCase());

     }}>To Uppercase/Tolowercase</button>
    <button type='button' onClick={()=>{
      let firstname = "pandya";
      let lastname ="hardik";
      let name;
       console.log( name =lastname.concat( firstname)) ;

     }}>Concat</button>
    <button type='button' onClick={()=>{
      let text="   string method   ";
      console.log(text.trimStart());
      console.log(text.trimEnd());
      console.log(text.trim());

      }}>trim /tstart/tend</button>
    <button type='button' onClick={()=>{
      let text2 ="9";
      console.log(text2);
      console.log(text2.padStart(15,"->"));
      console.log(text2.padEnd(15,"<-"))
      
      }}>Padstart/padend</button>
    <button type='button' onClick={()=>{
      let text3 ="<12345>";
      console.log(text3);
      console.log(text3.repeat(5));

    }}>Repeat</button>
    <button type='button' onClick={()=>{
      let text4="The big red big balloon floated big and high in the big blue sky.";
      console.log(text4);
      console.log(text4.replace("big","Large"))
     }}>Replace</button>
     <button type='button' onClick={()=>{
      let text4="The big red big balloon floated big and high in the big blue sky.";
      console.log(text4);
      console.log(text4.replaceAll("big","Large"))
     }}>Replaceall</button>
     <button type='button' onClick={()=>{
      let text5="The little bird sang a sweet song"
      console.log(text5);
      console.log(text5.split(" "));

     }}>Slipt</button>
     <button type='button' onClick={()=>{
     let text6="The bright flowers bloomed bright and colorful. The bright butterflies fluttered bright and free"
      console.log(text6);
      console.log(text6.slice(3,10));
      
    }}>Slice</button>
    <button type='button' onClick={()=>{
      let text6="The bright flowers bloomed bright and colorful. The bright butterflies fluttered bright and free"
      console.log(text6);
      console.log(text6.substring(3,10));
    }}>Substring</button>
    <button type='button' onClick={()=>{let text6="The bright flowers bloomed bright and colorful. The bright butterflies fluttered bright and free"
      console.log(text6);
      console.log(text6.substr(3,10));
      
    }}>Substr</button>
    <button type='button' onClick={()=>{
      let text5="The little bird sang a sweet song"
      console.log(text5);
      console.log(text5.length);
      console.log(text5.at(17));
      console.log(text5.charAt(17));
      console.log(text5[17]);
    }}>Length</button>
    <button type='button' onClick={()=>{
    let alphabets="0zyxwvutsrqponmlkjihgfedcba+*/-అఆఇఈఉఊఋఎఏఐఒఓఔఅంఅఃకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరలవశషసహళక్షఱ";
       for(let i=0;i<alphabets.length;i++){
       console.log(`${alphabets.charAt(i)}-->${alphabets.charCodeAt(i)}`)
       }
      
    }}>charcodeAt</button>
    <button type='button' onClick={()=>{
      for(let i=3077;i<3300;i++){
        console.log(String.fromCharCode(i))
      }
      
    }}>fromCharcode</button>
    <button type='button' onClick={()=>{
         let text5="The little bird sang a sweet song";
         let output=text5.endsWith("song");
         console.log(output);
      
    }}>endswith</button>
    <button type='button' onClick={()=>{
      let text5="The little bird sang a sweet song";
      let output=text5.startsWith("T");
      console.log(output);
      
    }}>startswith</button>
    <button type='button' onClick={()=>{
      let text7 ="Ramudu manchi baludu";
      console.log(text7.includes("Ram"));
      
    }}>Includes</button>
    
    <button type='button' onClick={()=>{
      let text7 ="Ramudu manchi baludu";
      console.log(text7.lastIndexOf("R"));  
    }}>lastIndexOf</button>
     <button type='button' onClick={()=>{
      // let text8 ="kumar is oar of AR";
      // console.log(text8.match(/ar/));
    let text8= "The rain in SPAIN stays mainly in the plain";
console.log(text8.match("ain"));

     }}>Match</button>

    

     </div>  
    </div>
  );
}

export default App;
