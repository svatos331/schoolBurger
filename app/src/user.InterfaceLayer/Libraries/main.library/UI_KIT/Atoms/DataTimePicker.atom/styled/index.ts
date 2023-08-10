import styled from "styled-components";
import Colors from "user.InterfaceLayer/Libraries/main.library/src/constants/colors";
import BreakPoints from "../../../../../../constants/breakPoints";

export const DatePickerWrapper = styled.div`


  //display: flex !important;

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {
    color: #9a9a9a !important;
  }

  .react-datepicker__day--disabled, .react-datepicker__month-text--disabled, .react-datepicker__quarter-text--disabled, .react-datepicker__year-text--disabled {
    cursor: default;
    color: #949494;
  }

  .react-datepicker__input-container > input {
    padding: 10px !important;
    text-align: center;
    border-radius: 20px;
    border: 0;
  }

  .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle {
    margin-left: -4px;
    position: absolute;
    width: 0;
    //display: flex !important;

  }

  .react-datepicker__month-container {
    @media (max-width: ${BreakPoints.MOBILE}px) {
      width: 240px !important;
    }

    .react-datepicker__current-month {
    }

    .react-datepicker__month {
      //display: flex;
      //flex-direction: column;

      .react-datepicker__week {
        .react-datepicker__day {
        }
      }
    }
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    background-color: ${Colors.ORANGE_DEFAULT} !important;
    color: white;
    font-weight: bold;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
    background-color: #216ba5;
  }

  .react-datepicker__year-text--highlighted {
    border-radius: 0.3rem;
    color: ${Colors.WHITE} !important;
  }

  .react-datepicker__year-text--highlighted:hover {
    background-color: #32be3f;
  }

  .react-datepicker__input-container {
    //display: flex !important;
  }

  .react-datepicker {
    .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {
      color: #4fd10b !important;
    }

    .react-datepicker__time {
      ul {
        color: ${Colors.WHITE} !important;
      }

      background-color: ${Colors.ORANGE_DEFAULT}
    }

    //display: flex !important;

    &__header {
      background-color: ${Colors.ORANGE_DEFAULT};
      //display: flex !important;
      flex-direction: column !important;
    }

    .react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before {
      border-color: ${Colors.BLACK}

    }

    &__popper {
      //display: flex !important;

      & > div {
        //display: flex !important;

        .react-datepicker { //fonts
          color: ${Colors.WHITE} !important;
          background-color: ${Colors.ORANGE_ACTIVE};

        }
      }
    }
  }

  .react-datepicker__triangle {

  }

  .react-datepicker-popper {

    & > div {

      .react-datepicker { //fonts
        &, & div {
        }

        @media (max-width: ${BreakPoints.MOBILE}px) {
          font-size: 10px !important;

        }
        background-color: ${Colors.ORANGE_ACTIVE};
      }
    }
  }
`;