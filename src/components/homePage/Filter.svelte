<script>

</script>

<style>
  input {
    color: #546975;
  }
  input::placeholder {
    color: #546975;
  }
  .filters-container {
    margin: 3rem;
    background-color: #63c2fd;
    border-radius: 3px;
    width: 20rem;
    position: sticky;
    position: -webkit-sticky;
    top: 7rem;
  }
  .filters {
    padding: 1.5rem;
  }
  .filters h3 {
    color: #ffffff;
    text-align: center;
  }

  .filter-border {
    margin: 0.7rem;
    border: none;
    border-radius: 7px;
    padding: 0.3rem;
  }

  .filter-container {
    background: #e8f6ff;
    border-radius: 7px;
  }

  .filter-btn {
    background-color: white;
    color: #546975;
  }

  .controls {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .date-filter {
    margin-top: 1.7rem;
    padding: 0;
  }
</style>

<div class="filters-container shadow-sm">
  <div class="filters">
    <h3>Filters</h3>

    <div class="controls">

      <div class="shadow-sm filter-container">
        <input
          class="filter-border"
          placeholder="Search for tags"
          type="text" />
      </div>

      <div class="filter-container date-filter filter-border shadow-sm">
        <button type="button" class="filter-btn filter-border">Newest</button>
        <button type="button" class="filter-btn filter-border">
          Sort by date
        </button>
      </div>

    </div>

  </div>
</div>
