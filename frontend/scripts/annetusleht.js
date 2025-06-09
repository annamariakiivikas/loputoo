function selectAmount(button) {
      document.querySelectorAll('.donation-amount').forEach(btn => {
        btn.classList.remove('bg-[#5f4234]', 'text-[#f3efeb]');
      });
      button.classList.add('bg-[#5f4234]', 'text-[#f3efeb]');

      const customAmountContainer = document.getElementById('customAmountContainer');
      if (button.textContent.trim() === "Muu") {
        customAmountContainer.classList.remove('hidden');
      } else {
        customAmountContainer.classList.add('hidden');
        document.getElementById('customAmountInput').value = '';
      }
    }

    function selectType(button) {
      document.querySelectorAll('.donation-type').forEach(btn => {
        btn.classList.remove('bg-[#5f4234]', 'text-[#f3efeb]');
      });
      button.classList.add('bg-[#5f4234]', 'text-[#f3efeb]');
    }