class apiFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
 
  }
  filter() {
   
    const queryObj = { ...this.queryString
     };

    const exclude = ['page', 'sort', 'limit', 'fields'];
    exclude.forEach((el) => delete queryObj[el]);

    

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`,
    );
    
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
}
export default apiFeatures;
