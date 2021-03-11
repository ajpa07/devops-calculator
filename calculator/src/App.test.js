import { render, fireEvent, screen, queryByTitle, getAllByText, cleanup } from '@testing-library/react';
import App from './App';

describe('Testing Calculator', function() {
  const { queryByTitle, getByText } = render(<App />);
  describe("<App />", () => {
    it(" Check whether Scientific Calculator react-app renders or not?", () => {
      //const { getByText } = render(<App />);
      expect(getByText(/0/i)).toBeInTheDocument();
    });
  });


  describe('Testing factorial operator', function() {
    it('factorialTruePositive', function () {
      const { queryByTitle, getByText } = render(<App />);
      //Case-1
      fireEvent.click(getByText("6"));
      fireEvent.click(getByText("!"));
      fireEvent.click(getByText("="));
      expect(queryByTitle("display").value).toBe("720");
      //Case-2
      fireEvent.click(getByText("Clear"));
      fireEvent.click(getByText("0"));
      fireEvent.click(getByText("!"));
      fireEvent.click(getByText("="));
      expect(queryByTitle("display").value).toBe("1");    
      });

    it('factorialFalsePositive', function() {
      const { queryByTitle, getByText } = render(<App />);
      //Case-1
      fireEvent.click(getByText("6"));
      fireEvent.click(getByText("!"));
      fireEvent.click(getByText("="));
      expect(queryByTitle("display").value).not.toBe("120");
      //Case-2
      fireEvent.click(getByText("Clear"));
      fireEvent.click(getByText("1"));
      fireEvent.click(getByText("9"));
      fireEvent.click(getByText("9"));
      fireEvent.click(getByText("!"));
      fireEvent.click(getByText("="));
      expect(queryByTitle("display").value).not.toBe("1");    
      });
      });
  

    describe('Testing power operator', function() {
      it('powerTruePositive', function () {
          const { queryByTitle, getByText } = render(<App />);
          //Case-1
          fireEvent.click(getByText("6"));
          fireEvent.click(getByText("^"));
          fireEvent.click(getByText("2"));
          fireEvent.click(getByText("="));
          expect(queryByTitle("display").value).toBe("36");
          //Case-2
          fireEvent.click(getByText("Clear"));
          fireEvent.click(getByText("0"));
          fireEvent.click(getByText("^"));
          fireEvent.click(getByText("0"));
          fireEvent.click(getByText("="));
          expect(queryByTitle("display").value).toBe("1");    
          });
    
        it('powerFalsePositive', function() {
          const { queryByTitle, getByText } = render(<App />);
          //Case-1
          fireEvent.click(getByText("6"));
          fireEvent.click(getByText("^"));
          fireEvent.click(getByText("2"));
          fireEvent.click(getByText("="));
          expect(queryByTitle("display").value).not.toBe("120");
          //Case-2
          fireEvent.click(getByText("Clear"));
          fireEvent.click(getByText("9"));
          fireEvent.click(getByText("^"));
          fireEvent.click(getByText("2"));
          fireEvent.click(getByText("="));
          expect(queryByTitle("display").value).not.toBe("1");    
          });
          });



   describe('Testing natural logarithm operator', function() {
      it('lnTruePositive', function () {
              const { queryByTitle, getByText } = render(<App />);
              //Case-1
              fireEvent.click(getByText("Clear"));
              fireEvent.click(getByText("ln"));
              fireEvent.click(getByText("2"));
              fireEvent.click(getByText("="));
              expect(queryByTitle("display").value).toBe("0.6931471805599453");
              //Case-2
              fireEvent.click(getByText("Clear"));
              fireEvent.click(getByText("ln"));
              fireEvent.click(getByText("0"));
              fireEvent.click(getByText("="));
              expect(queryByTitle("display").value).toBe("-Infinity");    
              });
        
            it('lnFalsePositive', function() {
              const { queryByTitle, getByText } = render(<App />);
              //Case-1
              fireEvent.click(getByText("ln"));
              fireEvent.click(getByText("2"));
              fireEvent.click(getByText("="));
              expect(queryByTitle("display").value).not.toBe("120");
              //Case-2
              fireEvent.click(getByText("Clear"));
              fireEvent.click(getByText("ln"));
              fireEvent.click(getByText("1"));
              fireEvent.click(getByText("0"));
              fireEvent.click(getByText("="));
              expect(queryByTitle("display").value).not.toBe("1");    
              });
              });    
              
              
describe('Testing squareroot operator', function() {
            it('sqrtTruePositive', function () {
              const { queryByTitle, getByText } = render(<App />);
              //Case-1
              fireEvent.click(getByText("Clear"));
              fireEvent.click(getByText("√"));
              fireEvent.click(getByText("2"));
              fireEvent.click(getByText("="));
              expect(queryByTitle("display").value).toBe("1.4142135623730951");
              //Case-2
              fireEvent.click(getByText("Clear"));
              fireEvent.click(getByText("√"));
              fireEvent.click(getByText("0"));
              fireEvent.click(getByText("="));
              expect(queryByTitle("display").value).toBe("0");    
              });
        
            it('sqrtFalsePositive', function() {
              const { queryByTitle, getByText } = render(<App />);
              //Case-1
              fireEvent.click(getByText("√"));
              fireEvent.click(getByText("2"));
              fireEvent.click(getByText("="));
              expect(queryByTitle("display").value).not.toBe("120");
              //Case-2
              fireEvent.click(getByText("Clear"));
              fireEvent.click(getByText("√"));
              fireEvent.click(getByText("1"));
              fireEvent.click(getByText("0"));
              fireEvent.click(getByText("="));
              expect(queryByTitle("display").value).not.toBe("1");    
              });
              }); 
         


});

