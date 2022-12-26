import React from "react";
import {render, screen, fireEvent } from '@testing-library/react';
import App from "./App";




describe("form validate", () => {

  test("submit button presence", async () => {
    render(<App />);
    const button =await screen.findAllByRole("button");
    expect(button).toHaveLength(1);
  })

  test("username check",()=>{
    render(<App />);
    const setup = () => {
      const utils = render(<App />)
      const input=screen.getByRole('textbox', {name: /username/i});
      return {
        input,
        ...utils,
      }
    }
    const {input} = setup()
    fireEvent.change(input, {target: {value: 'prabhakar'}})
    expect(input.value).toBe('prabhakar')
    })

    test("email check",()=>{
      render(<App />);
      const setup = () => {
        const utils = render(<App />)
        const input=screen.getByRole('textbox', {name: /email/i});
        return {
          input,
          ...utils,
        }
      }
      const {input} = setup()
      fireEvent.change(input, {target: {value: 'prabhakar@gmail.com'}})
      expect(input.value).toBe('prabhakar@gmail.com')
      })

      test("mobile number check", ()=>{
        render(<App />);
        const setup = () => {
          const utils = render(<App />)
          const input=screen.getByRole('textbox', {name: /mobile/i});
          return {
            input,
            ...utils,
          }
        }
        const {input} = setup()
        fireEvent.change(input, {target: {value: "9867542301"}})
        expect(input.value).toBe("9867542301")
        })

        test("password check", ()=>{
          render(<App />);
          const setup = () => {
            const utils = render(<App />)
            const input=screen.getByRole('textbox', {name: /password/i});
            return {
              input,
              ...utils,
            }
          }
          const {input} = setup()
          fireEvent.change(input, {target: {value: "prabha9867542301"}})
          expect(input.value).toBe("prabha9867542301")
          })

          test('submit button disabled', () => {
            render(<App />);
            const button = screen.getByRole('button', { name: /Submit/i });
            expect(button).toBeDisabled();
          })  
});