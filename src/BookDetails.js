import React from 'react';

export default function BookDetails(props){
  console.log(props);
  return(
    <div className="row">
      <div className="col-lg-2 col-md-2 col-sm-2">
      </div>
      {(props.title == "Adventures of Sherlock Holmes")&&
    <div className="col-lg-8 col-md-8 col-sm-8 bookDetailsStyle">
    The Adventures of Sherlock Holmes is a collection of twelve short stories by Arthur Conan Doyle, first published on 14 October 1892. It contains the earliest short stories featuring the consulting detective Sherlock Holmes, which had been published in twelve monthly issues of The Strand Magazine from July 1891 to June 1892. The stories are collected in the same sequence, which is not supported by any fictional chronology. The only characters common to all twelve are Holmes and Dr. Watson and all are related in first-person narrative from Watson's point of view.

In general the stories in The Adventures of Sherlock Holmes identify, and try to correct, social injustices. Holmes is portrayed as offering a new, fairer sense of justice. The stories were well received, and boosted the subscriptions figures of The Strand Magazine, prompting Doyle to be able to demand more money for his next set of stories. The first story, "A Scandal in Bohemia", includes the character of Irene Adler, who, despite being featured only within this one story by Doyle, is a prominent character in modern Sherlock Holmes adaptations, generally as a love interest for Holmes. Doyle included four of the twelve stories from this collection in his twelve favourite Sherlock Holmes stories, picking "The Adventure of the Speckled Band" as his overall favourite.
    </div>
  }
    {(props.title == "Jane Eyre")&&
      <div className="col-lg-8 col-md-8 col-sm-8 bookDetailsStyle">
      Jane Eyre /ɛər/ (originally published as Jane Eyre: An Autobiography) is a novel by English writer Charlotte Brontë, published under the pen name "Currer Bell", on 16 October 1847, by Smith, Elder & Co. of London. The first American edition was published the following year by Harper & Brothers of New York.[1] Jane Eyre is a Bildungsroman which follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall.[2]

    The novel revolutionised prose fiction by being the first to focus on its protagonist's moral and spiritual development through an intimate first-person narrative, where actions and events are coloured by a psychological intensity. Charlotte Brontë has been called the "first historian of the private consciousness", and the literary ancestor of writers like Proust and Joyce.[3]

    The book contains elements of social criticism with a strong sense of Christian morality at its core, and it is considered by many to be ahead of its time because of Jane's individualistic character and how the novel approaches the topics of class, sexuality, religion, and feminism.[4][5] It, along with Jane Austen's Pride and Prejudice, is one of the most famous romance novels of all time.[6]
      </div>
    }

    {(props.title == "Death on the Nile")&&
      <div className="col-lg-8 col-md-8 col-sm-8 bookDetailsStyle">
      Death on the Nile is a work of detective fiction by British writer Agatha Christie, first published in the UK by the Collins Crime Club on 1 November 1937[1] and in the US by Dodd, Mead and Company the following year.[2][3] The UK edition retailed at seven shillings and sixpence (7/6)[4] and the US edition at $2.00.[3] The full length novel was preceded in 1937 by a short story with the same title, but with Parker Pyne as the detective. The details of the short story plot are substantially different, though the settings and some of the characters are similar.

      The book features the Belgian detective Hercule Poirot. The action takes place in Egypt, mostly on the River Nile.
    </div>
    }
    <div className="col-lg-2 col-md-2 col-sm-2">
    </div>
    </div>
  )
}
