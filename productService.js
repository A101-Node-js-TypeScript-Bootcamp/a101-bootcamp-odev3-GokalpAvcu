const AWS=require('aws-sdk');
const { v4: uuidv4 } = require("uuid");

// aws configuration
AWS.config.update({
    region: "us-east-1",
    accessKeyId: "access_key",
    secretAccessKey: "secret_key",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com",
})

let docClient = new AWS.DynamoDB.DocumentClient();
let TABLE_NAME = "product";


// add products to the products table
exports.add=async (params)=>{
    let item = {
        TableName: TABLE_NAME,
        Item:{
          productId: uuidv4(),
          isDiscount:params.isDiscount,
          stock: params.stock,
          productName: params.productName,
          category: {
            categoryId: params.category.categoryId,
            categoryName: params.category.categoryName,
          }
          
        }
      }
      try{
        await docClient.put(item).promise();
        return{
          status:true,
          message:"Product added"
        }
      }
      catch(error){
        return err{
          status : false,
          message: error
        }
      }
}


exports.getById= async(params)=>{ // get product by id 
    const items={
      TableName:TABLE_NAME,
      Key:{
        productId:params.id
      }
    }
    try{
      const data=await docClient.get(items).promise()
      return{
        status:true,
        data:data
      }
    }
    catch (error){
      return {
        status:false,
        message:err
      }
    }
  
}
exports.getByDiscount=async()=>{
    const items={
      TableName:TABLE_NAME
    }
    try{
      const data=await docClient.scan(items).promise()
      return{
        status:true,
        data:data
      }
    }
    catch(err){
      return {
        status:false,
        message:err
      }
    }
}
exports.delete= async(params)=>{
  const items={
    TableName:TABLE_NAME,
    Key:{
      productId:params.productId
    }
  }
  try{
    const data2=await docClient.get(items).promise()
    if(!data2.Item.isDiscount){
      const data=await docClient.delete(items).promise()
      return{
        status:true,
        data:"Product Deleted"
      }
    }
    else{
      return{
        status:false,
        data:"The product could not be deleted because there is a discount"
      }
      }
   
  }
  catch (err){
    return {
      status:false,
      message:err
    }
  }
}
exports.update= async(params)=>{
  var item ={
    TableName:TABLE_NAME,
    Key:{
      "productId":params.productId
    },
    UpdateExpression:"set stock= :stock",
    ExpressionAttributeValues:{
      ":stock":parseInt(params.stock)
    },
    ReturnValues:"UPDATED_NEW"
  }
  try{
    const data =await docClient.update(item).promise();
    return{
      status:true,
      data:data
    }
  }
  catch(err){
    return{
      status:false,
      message:err
    }
  }
}

exports.discount=async()=>{
  const items={
    TableName : TABLE_NAME,
    FilterExpression:"isDiscount = :discount",
    ExpressionAttributeValues:{
      ":discount":true
    }
  }
  try{
    const data=await docClient.scan(items).promise()
    return{
      status:true,
      data:data
    }
  }
  catch(err){
    return {
      status:false,
      message:err
    }
  }
}
