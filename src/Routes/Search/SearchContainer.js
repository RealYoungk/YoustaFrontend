import React from "react";
import { withRouter } from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import HashTagPresenter from "./HashTagPresenter";
import { useQuery } from "react-apollo-hooks";
import { SEARCH } from "./SearchQueries";


export default withRouter(({ location }) => {
  const term = location.search.split("=")[1];
  const hash = location.hash.split("#")[1];
  const { data, loading } = useQuery(SEARCH, {
    skip: term === undefined,
    variables: {
      term,
    },
  });
 
  if(term==="")
  {
    return <HashTagPresenter searchTerm={hash} loading={loading} data={data} />
  }else
  {
  return <SearchPresenter searchTerm={term} loading={loading} data={data} />;
  }
  
});
