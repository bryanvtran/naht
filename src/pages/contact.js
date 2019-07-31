import React from "react"
import styled from "@emotion/styled"

import FormInput from "../components/form-input"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CenteredTitle = styled.h1`
    margin-bottom: 2em;
    text-align: center;
`;

const StyledForm = styled.form`
    margin: 0 auto;
    max-width: 400px;
    width: 100%;
`;

const SubmitButton = styled.input`
    background: #111;
    color: #fff;
    padding: 8px 12px;
    text-transform: uppercase;

    &:hover {
        cursor: pointer;
    }
`;

class ContactPage extends React.Component {
    state = {
        name: "",
        _replyto: "",
        message: "",
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state);
    }

    render() {
        return (
            <Layout>
                <SEO title="Contact" />
                <StyledForm accept-charset="utf-8" action="https://formspree.io/david@nahtajoke.com" method="post">
                    <CenteredTitle>Contact Us</CenteredTitle>
                    <FormInput label="Full Name" name="name" onChange={this.handleInputChange} value={this.state.name} />
                    <FormInput label="Email" name="_replyto" onChange={this.handleInputChange} type="email" value={this.state._replyto} />
                    <FormInput label="Message" name="message" onChange={this.handleInputChange} type="textarea" value={this.state.message} />
                    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
                    <SubmitButton type="submit" value="Submit" />
                </StyledForm>
            </Layout>
        )
    }
}

export default ContactPage
