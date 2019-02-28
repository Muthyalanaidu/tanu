class book{
    constructor()
    {
    this.id='1';
    this.name='physics';
    this.price='$400';
    }
      showdetails()
    {
        return(`ID is :${this.id}. Name is :${this.name}. Price is :${this.price}`)
    }
    }
    
    module.exports=book;