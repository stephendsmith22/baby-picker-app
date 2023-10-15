import React, {Fragment} from "react";
import { NameList } from "./name-list";
import { useNames } from "../providers/names";
import { useAppState } from "../providers/app-state";

export function ShortList(){
  //import our variables from our providers
  const names = useNames();
  const { shortList, setShortList } = useAppState();
  //find all names which match id's in our array
  const selectedNames = names.filter(entry => shortList.includes(entry.id));

  function removeFromShortList(id){
    setShortList(shortList.filter(i => i !== id));
  }

  const hasNames = selectedNames.length > 0;

  return (
    <div className="short-list">
      <h2>{hasNames ? "Your shortlist" : "Click on a name to shortlist it"}</h2>
      {hasNames && (
        <Fragment>
          <NameList nameList={selectedNames} onItemClick={removeFromShortList}/>
          <hr />
        </Fragment>
      )}
    </div>
  );
}