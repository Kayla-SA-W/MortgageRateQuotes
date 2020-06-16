import React from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'

// form to be generated on lenderGenerate

const LenderForm = ({ lender, handleSubmit, handleChange, cancelPath }) => (
  <div className='row'>
      <div className="col-sm-10 cold-md-8 mx-auto mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='loan size'>
            <Form.Label>Loan Size</Form.Label>
            <input
              placeholder="$450,000"
              value={lender.loanSize}
              name="loanSize"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId='property type'>
            <Form.Label>Property Type</Form.Label>
            <Form.Control as="select"
            value={lender.propertyType}
            name='propertyType'
            required
            placeholder=''
            onChange={handleChange}
          >
            <option>Single Family</option>
            <option>Condo</option>
            <option>TownHouse</option>
            <option>Multifamily</option>
          </Form.Control>
          </Form.Group>

          <Form.Group controlId='credit scor'>
            <Form.Label>Credit Score</Form.Label>
            <input
              placeholder="680"
              value={lender.creditScore}
              name="creditScore"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId='occupancy'>
            <Form.Label>Occupancy</Form.Label>
            <Form.Control as="select"
            value={lender.occupancy}
            name='occupancy'
            required
            placeholder=''
            onChange={handleChange}
          >
            <option>Primary</option>
            <option>Secondary</option>
            <option>Investment</option>
          </Form.Control>
          </Form.Group>

          <button type="button">Quote Rates</button>
          <Link to={cancelPath}>
            <button>Cancel</button>
          </Link>
        </Form>
      </div>
    </div>
)
export default LenderForm
