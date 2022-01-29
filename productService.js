const AWS=require('aws-sdk');
const { v4: uuidv4 } = require("uuid");

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIATGESNJ6G5MWNZE5Q",
    secretAccessKey: "u4M5XU79LLtKadOL0eNa68ttA9vs5crEvi5P",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com",
})

var docClient = new AWS.DynamoDB.DocumentClient();

var TABLE_NAME = "product";

exports.add=async (params)=>{
    var item = {
        TableName: TABLE_NAME,
        Item:{
          productID: uuidv4(),
          stock: params.stock,
          productName: params.productName,
          isDiscount:params.isDiscount,
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
          message:"Product Added"
        }
      }
      catch(err){
        return err
      }
}
exports.singleFetch= async(params)=>{
    const items={
      TableName:TABLE_NAME,
      Key:{
        productID:params.id
      }
    }
    try{
      const data=await docClient.get(items).promise()
      return{
        status:true,
        data:data
      }
    }
    catch (err){
      return {
        status:false,
        message:err
      }
    }
  
}
exports.fetchAll=async()=>{
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
      productID:params.productID
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
      "productID":params.productID
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
