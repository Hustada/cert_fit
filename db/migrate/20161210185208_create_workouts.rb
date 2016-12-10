class CreateWorkouts < ActiveRecord::Migration
  def change
    create_table :workouts do |t|
    	t.string :workout
    	t.datetime :date

      t.timestamps
    end
  end
end
