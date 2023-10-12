const express = require("express");
const Contact = require("../models/contactModel")
const asyncHander = require("express-async-handler");
const router = express.Router();
// get all contacts
// Get  /contacts
// public
const getContact = asyncHander(async(req,res) => { 
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});
// create new contact
// post /contacts
// public 
const createContact = asyncHander(async (req,res) => {
    console.log("the request is ",req.body);
    const {name,email,phone } = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(200).json(contact);
});
// update contact
// put /contacts/id
// public
const updateContact = asyncHander(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new error("contact not found");
    }
    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
    res.status(200).json(updateContact);
});
// delete contact 
// delete /contacts/id
// public
const deleteContact = asyncHander(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new error("contact not found");
    }
    await Contact.remove();
    res.status(200).json(contact);
});
// get contact
// get /contacts/id
// public
const getSingleContacts = asyncHander(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new error("contact not found");
    }
    res.status(200).json(contact);
});
module.exports = {getContact,createContact,updateContact,deleteContact,getSingleContacts
};