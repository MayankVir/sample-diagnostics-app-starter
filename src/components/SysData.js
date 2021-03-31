import React from 'react'
import "../App.css"
import "./SysData.css"

function SysData() {

	return (
		<div className="sysdata">
			<h2 className = "content_heading">System Data</h2>
			<div className="cpu_class" id="cpu_id">
				<div className="cpu_main_content">
					<div className = "box">
						<h4>CPU Name</h4>
						<div id="cpu_name"></div>
					</div>
					<div className = "box">
						<h4>CPU Architecture</h4>
						<div id="cpu_arch"></div>
					</div>
					<div className = "box">
						<h4>CPU Features</h4>
						<div id="cpu_feat"></div>
					</div>
					<div className = "box">
						<h4>CPU Temperatures</h4>
						<div id="cpu_temp"></div>
					</div>
				</div>
				<div className = "box">
					<h4>CPU Utilization</h4>
					<div id="cpu_util"></div>
				</div>
			</div>
			<hr />



			<div className="storage_class" id="storage_id">
				<div className = "box">
					<h4>Internal Storage</h4>
					<div id="storage_name"></div>
				</div>
			</div>
			<hr />



			<div className="memory_class" id="memory_id">
				<div className = "box">
					<h4>Memory</h4>
					<div id="memory_total"></div>
				</div>
				<div className = "box">
					<h4>Memory Usage</h4> 
					<div id="memory_bar"></div>
				</div>
			</div>
		</div>
	);
}

export default SysData
