class TipCalculator {
    constructor() {
        this.ratingsStorage = [];
        this.idValue = 1;
        this.init();
    }

    init() {
        this.setupRatings();
        this.setupBalanceAmount();
    }

    setupRatings() {
        const stars = document.querySelectorAll(".ratings span");

        stars.forEach((star) => {
            star.addEventListener("click", () => {
                const ratingValue = star.dataset.rating;
                stars.forEach((s) => {
                    if (s.dataset.rating <= ratingValue) {
                        s.setAttribute("data-clicked", "true");
                    } else {
                        s.removeAttribute("data-clicked");
                    }
                });


                this.ratingsStorage.push({ [`ratingId_${this.idValue}`]: ratingValue });
                this.idValue += 1;
            });
        });
    }

    setupBalanceAmount() {
    
        const balanceAmountSubmitBTN = document.querySelector(".balSubBtn");
        balanceAmountSubmitBTN.addEventListener("click", () => {
            const balanceAmount = document.querySelector("#bill-amount").value;
            this.setupTipButtons(balanceAmount);
        });
        
    }

    setupTipButtons(balanceAmount) {
        let isClicked = false
        const tipButtons = document.querySelectorAll(".tip-buttons button");
        const customTipButtons = document.querySelector(".custom-tip button");
        customTipButtons.addEventListener("click", () => {
            if(isClicked){
                const customTip = document.querySelector("#tip-amount").value
                this.setupNumberOfPeople(balanceAmount, customTip)
            } else {
                const customTip = document.querySelector("#tip-amount").value
                this.setupNumberOfPeople(balanceAmount, customTip)
                isClicked = true;
               
            }
        })

        tipButtons.forEach((tip) => {
            tip.addEventListener("click", () => {
                const tipValue = tip.dataset.percent;

                tipButtons.forEach((t) => {
                    if (t.dataset.percent === tipValue) {
                        t.setAttribute("data-clicked", "true");
                    } else {
                        t.removeAttribute("data-clicked");
                    }
                });

                this.setupNumberOfPeople(balanceAmount, tipValue);
            });
        });

       
    }

    setupNumberOfPeople(balanceAmount, tipValue) {
        const numberOfPeopleBtn = document.querySelector(".people-amount-btn");
        numberOfPeopleBtn.addEventListener("click", () => {
            const numberOfPeople = document.querySelector("#people").value;

            this.calculatePerPerson(numberOfPeople, tipValue, balanceAmount)
        });
    }

    calculatePerPerson(numberOfPeople, tipValue, balanceAmount){
        const numNumberOfPeople = Number(numberOfPeople)
        const numTipValue = Number(tipValue) / 100
        const numBalanceValue  = Number(balanceAmount)

        const interest = numBalanceValue * numTipValue
        const totalAmount = numBalanceValue +  interest
        const perPersonAmount = totalAmount / numNumberOfPeople

        perPersonAmount.toFixed(2)

        const perPersonPTag = document.querySelector(".per-person-price")
        perPersonPTag.textContent = `R ${perPersonAmount}`


    }   
}


document.addEventListener("DOMContentLoaded", () => {
    new TipCalculator();
});
