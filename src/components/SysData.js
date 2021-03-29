import React from 'react'
import "../App.css"
import "./SysData.css"

function SysData() {

	return (
		<div className="sysdata">
			<h2 className = "content_heading">System Data</h2>
			<div className="cpu_class" id="cpu_id">
				<div className="cpu_main_content">
					<div className = "cpu_name box">
						<h4>CPU Name</h4>
						<div className="cpu_name"></div>
					</div>
					<div className = "cpu_arch box">
						<h4>CPU Architecture</h4>
						<div className="cpu_arch"></div>
					</div>
					<div className = "cpu_feat box">
						<h4>CPU Features</h4>
						<div className="cpu_feat"></div>
					</div>
					<div className = "cpu_temp box">
						<h4>CPU Temperatures</h4>
						<div className="cpu_temp"></div>
					</div>
				</div>
				<div className = "cpu_util box">
					<h4>CPU Utilization</h4>
					<div className="cpu_util"></div>
				</div>
			</div>
			<hr />



			<div className="storage_class" id="storage_id">
				<div className = "storage_name box">
					<h4>Internal Storage</h4>
					<div className="storage_name"></div>
				</div>
			</div>
			<hr />



			<div className="memory_class" id="memory_id">
				<div className = "memory_total box">
					<h4>Memory</h4>
					<div className="memory_total"></div>
				</div>
				<div className = "memory_bar box">
					<h4>Memory Usage</h4> 
					<div className="memory_bar"></div>
				</div>
			</div>
			<hr />

			<div className="battery_class" id="battery_id">
				<div className = "battery_status box">
					<h4>Battery Status</h4>
					<div className="battery_status"></div>
				</div>
				<div className = "time_rem box">
					<h4>Time for Full</h4>
					<div className="time_rem"></div>
				</div>
			</div>
			<hr />

			<div className="display_class" id="display_id">
				<div className = "display_name box">
					<h4>Display</h4>
					<div className="display_name"></div>
				</div>
			</div>
		</div>
	);
}

export default SysData
